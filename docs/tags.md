#Tag
----------

Tag - a word or phrase that can unite a group of text, images etc on or


### Feature:

In this section we will show how you can manage your entities tags.

```php
// Get the entity object
$ Post = Post :: find (1);

// Through a string
$ Post-> tag ( 'foo, bar, baz');

// Through an array
$ Post-> tag ([ 'foo', 'bar', 'baz']);
```




###Removal:

Removes one or more tags in an array or object
through a string delimiter separated entities.

```php
// Get the entity object
$ Post = Post :: find (1);

// Through a string
$ Post-> untag ( 'bar, baz');

// Through an array
$ Post-> untag ([ 'bar', 'baz']);

// Remove all the tags
$ Post-> untag ();
```



###Setup:

This method is very similar to the method tag (), but it combines untag (),
so that it automatically identifies the tag to add and remove.
This is a very useful method when you run an update on the subjects,
and you do not want to deal with checks to ensure that
Tags which are to be added or removed.

```php
// Get the entity object
$ Post = Post :: find (1);

// Through a string
$ Post-> setTags ( 'foo, bar, baz');

// Through an array
$ Post-> setTags ([ 'foo', 'bar', 'baz']);

// Using the `slug` column
$ Post-> setTags ([ 'foo', 'bar', 'baz'], 'slug');
```


###Read:

We have some techniques to help you get all the tags,
attached to an object and do the opposite and get all objects
with predetermined tags.

```php
// Get the entity object
$post = Post::whereTag('foo, bar')->get();


$post = Post::find(1);
$tags = $post->tags;

$tags = Post::allTags();
```