# wc-dynamic-type

A web component that type!

![example](assets/example.gif)

## Getting started

### install

via npm

```
npm i wc-dynamic-type
```

or via cdn in your head tag

```
<script defer src="https://unpkg.com/wc-dynamic-type@1.0.0/dynamic-type.js"></script>
```

### use the component

```html
<dynamic-type words="software engineer; software developer; programmer."></dynamic-type>
```

inside the tag use the property `words`, you can pass it a string and separate every phrase with a semicolon

### personalize

```html
<dynamic-type
  words="software engineer; software developer; programmer."
  loop="true"
  typeDelay="100"
  deleteStartAfter="750"
  deleteDelay="25"
  colors="#ed4b4b; #3f7ff7; #888;"
>
</dynamic-type>
```
