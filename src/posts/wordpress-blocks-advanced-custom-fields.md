---
title: 'WordPress Blocks with Advanced Custom Fields'
slug: '/wordpress-blocks-advanced-custom-fields'
date: '2021-07-22'
---

Lately I’ve had the opportunity to build some new custom WordPress projects, and with the arrival of the Block Editor (aka Gutenberg), this presented an chance to re-think how to go about building a custom project, from how it might have traditionally been done in the past.

Before the arrival of the Block Editor, the way to achieve a more advanced editing experience with customized layouts was to leverage [Advanced Custom Fields](https://www.advancedcustomfields.com/). Using its Flexible Content field, it is possible to create complex pages using custom components that can be repeated and re-ordered as needed.  A simple function call in the PHP template can retrieve the required data, and the developer is able to do what they need to do with it on the front end.

## Enter Gutenberg

The new Block Editor presents a whole new paradigm for content editing in WordPress. With it, we can enter "blocks" in a similar way to what I described above using ACF’s Flexible Content field, but it operates like a more advanced visual page builder, from the perspective of a content editor. It even comes with "layout" blocks, with which we can create columns into which more blocks can be placed. Even more, the editing experience allows the editor to see the end result right from the editing screen, as though he were editing the HTML directly.

While this is pretty handy, we’re somewhat dependent on what WordPress provides by default in terms of styles and layout options. A given theme might have custom CSS for some of these blocks, but to a certain extent the challenge still lies with the content editor to create the desired layouts.

## Building Custom Blocks

When building a _custom_ WordPress theme, however, a developer has the luxury of creating their own blocks which can be made available to the content editor. These custom blocks can have all of the complexity and flexibility that a custom design might call for, enabling much more robust design and layout options for the front end.

And yet, this new paradigm extends beyond the content entry experience down to the development experience as well. Up until now, extending WordPress manually largely involved writing custom PHP, using WordPress’ filters and hooks systems. With Gutenberg, however, this task shifts to the front-end, and custom blocks are built with JavaScript. The API for creating new blocks sits over top of React, so there is even more of a knowledge requirement to be proficient in this system. I suppose one could learn the ins and outs of custom blocks in JavaScript without much React knowledge, but it is certainly an advantage to have familiarity with React.

Aside from a traditional, PHP-focused WordPress developer needing to add some JavaScript to their development toolkit, the biggest drawback here can be time. An experienced developer might be able to crank out custom blocks at a reasonably quick pace, but it still requires additional time writing code for the editor experience, on top of the code that will eventually end up on the front end of the website. With significant time and budget, perhaps there’s not much of an issue here. But what if those constraints put a limit on this kind of custom development?

## Enter ACF Pro

The Pro version of Advanced Custom Fields provides a [solution to this problem](https://www.advancedcustomfields.com/resources/blocks/). By providing a PHP solution to block creation, a developer already familiar with ACF can efficiently create new custom blocks without writing any JavaScript. In a similar way he might register a new custom post type, the developer can leverage some new ACF function to register new blocks, with all of the requisite configuration options.

Further, he can use the familiar `get_field()` and similar familiar functions that ACF provides for fetching data from a custom field.

In addition, it follows the Block Editor convention of saving the content to the WordPress "content" area, rather than saving the custom fields content as post meta like in _traditional_ ACF fashion. In this way, custom blocks can be combined with default blocks, or blocks provided by a plugin, to achieve a high level of complexity with a huge amount of flexibility.

## Block Development in Practice: Roots Sage

For these recent projects, I’ve had the luxury of trying out a few different approaches. The first one is in the context of the [Sage](https://roots.io/sage/) theme, which takes advantage of some PHP paradigms not normally found in WordPress, using a more object-oriented approach, as well as some templating tools such as Blade, both of which are hallmarks of [Laravel](https://laravel.com/).

Version 10 of Sage uses what it calls "composers" to do a bunch of the data handling. Without getting into how it all works under the hood, these composers essentially provide a place to handle your data before sending it to the view layer, more like the "controller" part of an MVC framework.

When registering my ACF block, I can choose to define a _render function_ rather than a template file:

```php
add_action('acf/init', function () {

    $blocks = [
        array(
            'name'              => 'hero-block',
            'title'             => __( 'Hero' ),
            'render_callback'   => '\App\acf_block_render_callback',
            ...
        ),
    ];

    // Check function exists.
    if (function_exists( 'acf_register_block_type' )) {
        foreach ($blocks as $block) {
            acf_register_block_type($block);
        }
    }
});

```

Elsewhere, I can define my render callback function. Within it, there's a bit of Sage magic to pass along the block data to the composer. I have adapted what I found in [this gist](https://gist.github.com/marijoo/4673905393d04ddf7c50b2a43d8d52cf) to make it work with the Sage 10 composer paradigm:


```php
namespace App;

 function acf_block_render_callback($block) {

    $slug = str_replace('acf/', '', $block['name']);

    // do other block stuff here...

    echo \Roots\view("blocks/${slug}", $block);
 }
```

The composer itself will handle getting/formatting the data, and pass it to the view template. For example, my _hero_ block could have a composer file that looks like this:

```php
namespace App\View\Composers;

 use Roots\Acorn\View\Composer;

 class Hero extends Composer
 {
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'blocks.hero',
    ];

    /**
     * Data to be passed to view before rendering, but after merging.
     *
     * @return array
     */
    public function override()
    {
        return [
            'hero' => get_fields(),
        ];
    }
 }

```

If I want, I could get all of my fields individually, and pass return them as separate items in that array. This is a great approach if I need to massage data in a particular way. Finally, the view template, found in the `resources/views/blocks/hero.blade.php` file, as indicated by the `blocks.hero` part of this file:

```php
<div class="hero-block">
    <h1>{{ $hero['heading'] }}</h1>
    <p>{{ $hero['sub_heading'] }}</p>
</div>
```


## Block Development in Practice: Using a Normal Theme

If not using a Roots/Sage -based theme, the process is similar, but perhaps a little simpler. In this case, the first code block is nearly identical, but each block would receive its own render function:

```php
add_action('acf/init', function () {

    $blocks = [
        array(
            'name'              => 'hero-block',
            'title'             => __( 'Hero' ),
            'render_callback'   => 'render_hero_block',
            ...
        ),
    ];

    // Check function exists.
    if (function_exists( 'acf_register_block_type' )) {
        foreach ($blocks as $block) {
            acf_register_block_type($block);
        }
    }
});
```

Your render function would handle all of the data handling that in the previous example was handled by the global callback, in combination with the composer file. That function should follow more closely how a render function is described in the WordPress docs, and might look like this:

```php
function render_hero_block( $block, $content = '', $is_preview = false, $post_id = 0 ) {

	$fields = array(
		'heading'          => get_field( 'heading' ),
		'sub_title'        => get_field( 'sub_title' ),
	);

	get_template_part(
		'blocks/hero',
		'hero',
		array(
			'block'      => $block,
			'is_preview' => $is_preview,
			'post_id'    => $post_id,
			'fields'     => $fields,
		)
	);
}
```

Finally, my view template being referenced by the WordPress function `get_template_part` will output my hero block. Note the `$args` variable, which represents any data passed via that function:

```php
<div class="hero-block">
    <h1><?php echo $args['fields']['heading']; ?></h1>
    <p><?php echo $args['fields']['sub_heading']; ?></p>
</div>
```

The advantage to using a render callback fuction over calling the template directly, which ACF allows for, is that the template can be re-usable. So long as the function calling formats the data in the same way, this template can be totally portable.

## Wrapping It Up

As we can see from these examples, creating blocks can be made relatively straightforward with the help of Advanced Custom Fields (pro version).

It is worth mentioning that these blocks are all _dynamic_ blocks, in that the PHP is executed when the page renders, in contrast to how a default block would execute the JavaScript, and save the outcome of that into the _content_ directly. Static vs. dynamic blocks would be a separate topic, but you can read about it in the [docs](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/) if that tickles your fancy right now.

I believe this is a great approach to modern WordPress theme development, especially for the solo or time-crunched developer. I rarely encounter a custom project that doesn’t leverage some kind of custom fields plugin such as ACF or Meta Boxes, so why not take full advantage and dive into custom blocks this way? As a front-end developer, I love the JavaScript approach. But in practice, I think this can be much faster and more convenient to create custom blocks.
