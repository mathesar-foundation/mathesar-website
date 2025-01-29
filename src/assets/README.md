# Assets

This is a directory for images imported using Svelte's enhanced image functionality.
Images imported for use with the `<enhanced:img />` component can not be located in the `/static` directory.

See [the @sveltejs/enhanced-img docs](https://svelte.dev/docs/kit/images#sveltejs-enhanced-img) for more information.

## Importing images

Images can either be imported into a svelte script block like this:

```svelte
<script>
    import Scalable from "../assets/illustrations/scalable.png?w=800&lossless&enhanced";
</script>

<enhanced:img src={Scalable} />
```

Note that the import string needs to end in `?enhanced` or `&enhanced` if using multiple params.

Or, can be a vite [asset import string](https://vite.dev/guide/assets#importing-asset-as-url) like so:

```svelte
<enhanced:img src="/src/assets/illustrations/scalable.png?w=800&lossless" />
```
