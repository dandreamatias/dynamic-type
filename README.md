# wc-dynamic-imput

A web component that type!

![](assets/example.gif)

## Usage

1. install

via npm

```
npm i wc-dynamic-type
```

or via cdn in your head tag

```
<script defer src="https://unpkg.com/wc-dynamic-type@1.0.0/dynamic-type.js"></script>
```

2. use the component

```html
<dynamic-type words="software engineer; software developer; programmer."></dynamic-type>
```

inside the tag use the property `words`, you can pass it a string and separate every phrase with a semicolon

3. personalize

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
