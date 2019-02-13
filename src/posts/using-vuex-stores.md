---
title: 'Using Vuex Stores with Vue'
slug: '/using-vuex-stores-with-vue'
date: '2019-02-13'
---

Managing the state of a large Vue app (or React app, or any kind of app, really) can be a bit of a bear. This is true particularly if you have a lot of different piece of data to manage - so I certainly recommend breaking your store up into modules, so as to keep better organized in your code. Here's how I might implement Vuex to manage the state of my Vue app. The way I implemented Vue on [Samuel French](https://samuelfrench.com/) for managing searches and shopping cart data is very similar to what you will see here.

## Getting set up with multiple stores

In this implimentation of Vuex, the goal is to keep things as tidy and organized as possible.  Any given app should have its own store (includes: state, getters, actions, mutations), which would then be imported to the single instance of the Vuex store as a module:

```js
// store.js

import Vue from 'vue';
import Vuex from 'vuex';
import store_a from 'path/to/store_a';
import store_b from 'path/to/store_b';

export const store = () => {
  return new Vuex.Store({
    modules: {
      store_a,
      store_b
    }
  });
};
```

## Store Structure

Any given store would contain its own state, getters, actions, and mutations. At the end of the day, these are all plain JS objects, exported from their own files. To ensure consistency across these objects, they will all import variables to describe events that trigger changes. Let's say our store is called "search":

```js
// search/index.js

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const store = {
  searchResults: [],
  isFetching: false,
  hasError: false
}

export default {
  store,
  actions,
  getters,
  mutations
}

```

Rather than defining something like "searchResults" in your component's local data, we move anything like this that might need to be updated asynchronously, or shared with another component (as we will see later), into the store instead. We will also give names to the types of actions and mutations we will want to use. These will be referenced by our actions, mutations, as well as inside our components:

```js
// /search/types.js

export const GET_SEARCH_RESULTS = 'GET_SEARCH_RESULTS';
export const GET_SEARCH_RESULTS_SUCCESS = 'GET_SEARCH_RESULTS_SUCCESS';
export const GET_SEARCH_RESULTS_ERROR = 'GET_SEARCH_RESULTS_ERROR';
```

The use of all-caps here is a convention, and helps to visually identify Vuex-specific behaviours. Further, using variables helps us ensure consistency and reduces the potential for errors in our code. And if we need to, we can change the values of the action/mutation types.

Getters are functions run on values in your state, just like computed properties behave in your component. The first prop is this store's state, which in this case is the `search` store. An optional param is the getters object itself, so you can refer to the result of other getters' values, like in our `showResults` getter:

```js
// search/getters.js

export const getters = {
  numberResults(state) {
    return state.searchResults.length;
  },
  filteredResults(state) {
    return state.searchResults.filter(result => result.isAllowed)
  },
  showResults(state, getters) {
    return state.isFetching && !state.hasError && getters.numberResults > 0
  }
}
```

Inside our component, we would import some functions defined by Vuex to leverage this store as we see in our next example. These functions are used to pull the store into the component for consumption, by using the `mapState` helper. Using the spread syntax, `mapState` adds the store's object keys into our computed properties, which can be accessed elsewhere in our component. Notice the namespaced structure of our store object - we must access the specific store we need: `state.STORE_NAME.searchResults`.

Also required is any event type needed, like for calling an asynchronous request, in this case `GET_SEARCH_RESULTS`, which is added with the `mapActions` helper, again with the spread syntax, adding to our local methods:

```js
// searchForm.vue

import { mapActions, mapState, mapGetters } from 'Vuex';
import { GET_SEARCH_RESULTS } from 'path/to/search/types';

...

  methods: {
    ...mapActions([
      GET_SEARCH_RESULTS
    ])
  },
  computed: {
    ...mapState({
      searchResults: state => state.search.searchResults
    }),
    ...mapGetters([
      'numberResults',
      'filteredResults'
    ])
  }
```

We now have access to any actions defined outside, in our store's actions. Actions are important because they work asynchronously _for us_. This is particularly useful when we need to interact with an API, using your usual HTTP methods (get, post, etc). We can also choose to handle errors right here, and call the proper mutation based on the API response, rather than sending back the response to the component directly. Since our types are variables, we can access them using the `[varName]` syntax:

```js
// search/actions.js

import axios from 'axios';
import * as type from './types';

export const actions = {
  [type.GET_SEARCH_RESULTS]: async ({ commit }, payload) => {
    commit(type.GET_SEARCH_RESULTS);
    try {
      const response = await axios.get('/api-endpoint', payload);
      commit(type.GET_SEARCH_RESULTS_SUCCESS, response);
    } catch(err) {
      commit(type.GET_SEARCH_RESULTS_ERROR, err);
    }
  }
}
```

The `commit` function, destructured from the default arguments of the action, lets us _commit_ our new data to state, by calling a mutation. Our mutations use the same names as we find is the actions object. Our above example calls three separate commits, with different mutations, allowing us to control our UI based on what is happening with the API call as we mentioned above.

In our mutations, we receive whatever payload is being sent from our action (as the second), and we can now update our state:

```js
// search/mutations.js

import * as type from './types';

export const mutations =  {
  [type.GET_SEARCH_RESULTS](state, payload) {
    state.isFetching = true;
  },
  [type.GET_SEARCH_RESULTS_SUCCESS](state, payload) {
    state.searchResults = [...payload.data];
    state.hasError = false;
    state.isFetching = false;
  }
  [type.GET_SEARCH_RESULTS_ERROR](state, payload) {
    state.hasError = true;
    state.isFetching = false;
  }
}
```

## Putting it together

Now that we have put together the Vuex store, let's look at a more complete example inside a Vue component. In our pretend search form,  we call a `handleSubmit` when the form is posted, which ultimately calls our action. When the API call is resolved, our state gets updated as a result of the commit functions that call our mutations:

```js
// searchForm.vue

<template>
  <form @submit="handleSubmit">
    <input type="text" :model="searchTerm" />
    <div
      v-if="hasError">
      There was an error with your search
    </div>
    <button :class="{'show-spinner': isFetching}">Submit</button>
  </form>
</template>

<script>

import { mapActions, mapState, mapGetters } from 'Vuex';
import { GET_SEARCH_RESULTS } from 'path/to/search/types';

export default {
  name: 'search-form',
  data() {
    return {
      searchTerm: ''
    }
  },
  methods: {
    ...mapActions([
      GET_SEARCH_RESULTS
    ]),
    handleSubmit() {
      // perform validation or data formatting before submitting, if needed
      // then pass along our search term to the action
      this.GET_SEARCH_RESULTS(this.searchTerm);
    }
  },
  computed: {
    ...mapState({
      isFetching: state => state.search.isFetching,
      hasError: state => state.search.hasError,
    })
  }

}
</script>
```

What we see here is that the data mapped from our store operates in the Vue template just like local data would.  When our store's `isFetching` is true, we can show a spinner gif or some other style in place of our button. Once the API call resolves, the mutation sets `isFetching` to `false`, and our class disappears.

In exactly the same way, if there is an error with the API call, we commit that to our state, and show the error message in the template. If another call is attempted with success, the mutation sets the store's `hasError` to false, and the message is hidden.

The REAL beauty now, is using this same data inside another component. Let's imagine that the example above only performs the search. What about showing the results?  In another component, we can borrow the same state data:

```js
// searchResults.vue

<template>
  <div>
    <p>Total results: {{ numberResults }}</p>
    <ul v-if="showResults">
      <li v-for="filteredResults as result">
        <a href="result.href">{{ result.text }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'Vuex';

export default {
  name: 'search-results',
  computed: {
    ...mapState({
      isFetching: state => state.search.isFetching,
      hasError: state => state.search.hasError,
    }),
    ...mapGetters([
      'numberResults',
      'filteredResults',
      'showResults'
    ])
  }
}
</script>
```
In this case, we can also show our results based on our `showResults` getter - it checks whether or not there are results to show, if there are errors, and if we're not still fetching data.

## Vuex store recap

Now we can easily share our `search` store between components. By moving our local data and API calls from within our component and into the store, _any_ component can access the `search` state, getters, and actions. As a result, our component is cleaner, and our code is reusable across components that need access to `search` data.
