import{_ as e,c as o,o as t,a as i}from"./app.2524b8b6.js";const p=JSON.parse('{"title":"FormModel","description":"","frontmatter":{},"headers":[],"relativePath":"api/form-model.md"}'),d={name:"api/form-model.md"},a=i('<h1 id="formmodel" tabindex="-1">FormModel <a class="header-anchor" href="#formmodel" aria-hidden="true">#</a></h1><p>Can be created by using createForm method. Has following properties:</p><p>Stores:</p><ul><li><code>$values</code> - current form values</li><li><code>$focused</code> - path to the field which&#39;s in focus right now (set by <code>focused</code> event and reset by blured)</li><li><code>$initialValues</code> - contains initial values (if store was passed in params of <code>createForm</code> it&#39;s gonna be used right away instead of creating another one)</li><li><code>$isDisabled</code> - global form disable state (passed from params in <code>createForm</code>)</li><li><code>$submitCount</code> - counter of how much time <code>submit</code> event was called</li><li><code>$dirty</code> - Map where keys are field paths and values are booleans. Contains fields which been changed by <code>change</code> calls</li><li><code>$touched</code> - Same as <code>$dirty</code> but contains &quot;touched&quot; state for touched fields</li><li><code>$errors</code> - Contains error map returned by validation method. Check <code>ErrorsMap</code> type from &#39;@filledout/core&#39;.</li><li><code>$externalErrors</code> - Same <code>ErrorsMap</code> as <code>$errors</code> but entire store is provided by one passed into createForm call.</li></ul><p>Derived Stores:</p><ul><li><code>$isValid</code> - boolean flag which reflects if <code>$errors</code> are empty or not</li><li><code>$isDirty</code> - <code>true</code> when some field is dirty</li><li><code>$isFocused</code> - <code>true</code> when <code>$focused</code> is not empty</li><li><code>$isTouched</code> - <code>true</code> when some field is touched</li><li><code>$isSubmitted</code> - <code>true</code> if <code>$submitCount</code> is <code>&gt; 0</code></li></ul><p>Events:</p><ul><li><code>submitted</code> - Called when form is submitted successfully. IMPORTANT: by default it&#39;s not called from anywhere it&#39;s either responsibility of schema validation adapters or you if you&#39;re not using validators you should manually bind sample({ clock: submit, target: submitted }) in factoryInterceptor or in your custom createForm decorator function.</li><li><code>blured</code> - called from UI when field lose focus</li><li><code>focused</code> - called form UI when field get focused</li><li><code>changed</code> - called when field explicitly changes (has field path and value as a payload)</li><li><code>rejected</code> - called when submitted with errors (has errors and valueus as a payload). IMPORTANT: it&#39;s not called from anywhere by default just like <code>submitted</code> so it follows the same logic as described above.</li><li><code>put</code> - Accepts values to replace current values with</li><li><code>reset</code> - Resets form to default state. All touched/dirty and other states are cleared, values set to initialValues (if initialValues is a store it&#39;s $values gonna be set to current initialValues state)</li><li><code>set</code> - Sets field value (accepts field path and value) without triggering dirty state</li><li><code>patch</code> - Accepts values to deepmerge with current form values</li><li><code>submit</code> - Submits a form (by default it&#39;s not redirected to submitted/rejects, check notes above)</li><li><code>change</code> - Sets field value (accepts field path and value) and triggers dirty state</li><li><code>validate</code> - Calls form validation (by default doesnt do anything but validators will subscribe to it under the hood)</li></ul><p>Misc:</p><ul><li><code>showValidationOn</code> - List of ValidationVisibilityCondition set while creating a form (or global value if nothing was passed into <code>createForm</code>)</li><li><code>fields</code> - Field proxy object which allows you to access field units (which gonna be generated on the &quot;fly&quot;). IMPORTANT: do not use it in UI code because it&#39;s gonna break reference equality. For UI usage in UI check specific section of the docs</li></ul>',10),c=[a];function l(s,r,n,u,f,h){return t(),o("div",null,c)}const b=e(d,[["render",l]]);export{p as __pageData,b as default};
