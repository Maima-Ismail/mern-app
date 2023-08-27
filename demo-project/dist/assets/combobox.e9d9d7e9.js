import{V as c}from"./VCombobox.8419a1a0.js";import{k as d,o as V,b,q as r,D as u,Z as y,ar as I,w as s,p as t,E as i,m as a,x as C}from"./index.30a9a44b.js";import{a as P,b as D}from"./VList.115d9393.js";import{a as n,V as _}from"./VRow.2532b873.js";import{V as w}from"./VChip.45813b53.js";import{V as U}from"./VAvatar.aeee1a67.js";import{_ as L}from"./AppCardCode.8842112e.js";import"./VSelect.69af7930.js";import"./VImg.9952cb03.js";import"./router.dfe3e1e7.js";import"./forwardRefs.c003b6b8.js";import"./VMenu.54c59b67.js";import"./scopeId.a99c0c73.js";import"./VOverlay.998081e8.js";import"./lazy.fa0d234d.js";import"./easing.36b781ab.js";import"./VCheckboxBtn.4e339412.js";import"./VSelectionControl.b8a27f61.js";import"./VInput.24975e5a.js";import"./index.6a573a18.js";import"./VTextField.b21e8a14.js";/* empty css                   */import"./VField.e328867b.js";import"./position.8ec4a68a.js";import"./VCounter.da854d3c.js";import"./filter.d7d7e3e2.js";import"./VDivider.a03abf93.js";import"./VBtn.b063c464.js";import"./vue.runtime.esm-bundler.151991b7.js";import"./VCard.7c5bdd1f.js";const k={__name:"DemoComboboxClearable",setup(g){const e=d(["Vuetify","Programming"]),m=["Programming","Design","Vue","Vuetify"];return(p,l)=>(V(),b(c,{modelValue:r(e),"onUpdate:modelValue":l[0]||(l[0]=o=>u(e)?e.value=o:null),items:m,label:"Combobox",multiple:"",clearable:""},null,8,["modelValue"]))}},A=a("kbd",null,"enter",-1),R={__name:"DemoComboboxNoDataWithChips",setup(g){const e=["Gaming","Programming","Vue","Vuetify"],m=d(["Vuetify"]),p=d(null);return y(m,l=>{l.length>5&&I(()=>m.value.pop())}),(l,o)=>(V(),b(c,{modelValue:r(m),"onUpdate:modelValue":o[0]||(o[0]=f=>u(m)?m.value=f:null),"search-input":r(p),"onUpdate:search-input":o[1]||(o[1]=f=>u(p)?p.value=f:null),items:e,"hide-selected":"","hide-no-data":!1,hint:"Maximum of 5 tags",label:"Add some tags",multiple:"","persistent-hint":""},{"no-data":s(()=>[t(P,null,{default:s(()=>[t(D,null,{default:s(()=>[i(' No results matching "'),a("strong",null,C(r(p)),1),i('". Press '),A,i(" to create a new one ")]),_:1})]),_:1})]),_:1},8,["modelValue","search-input"]))}},N={__name:"DemoComboboxMultiple",setup(g){const e=d(["Vuetify","Programming"]),m=["Programming","Design","Vue","Vuetify"];return(p,l)=>(V(),b(_,null,{default:s(()=>[t(n,{cols:"12"},{default:s(()=>[t(c,{modelValue:r(e),"onUpdate:modelValue":l[0]||(l[0]=o=>u(e)?e.value=o:null),items:m,label:"Select a favorite activity or create a new one",multiple:""},null,8,["modelValue"])]),_:1}),t(n,{cols:"12"},{default:s(()=>[t(c,{modelValue:r(e),"onUpdate:modelValue":l[1]||(l[1]=o=>u(e)?e.value=o:null),items:m,label:"I use chips",multiple:"",chips:""},null,8,["modelValue"])]),_:1}),t(n,{cols:"12"},{default:s(()=>[t(c,{modelValue:r(e),"onUpdate:modelValue":l[2]||(l[2]=o=>u(e)?e.value=o:null),label:"I'm readonly",chips:"",multiple:"",readonly:""},null,8,["modelValue"])]),_:1}),t(n,{cols:"12"},{default:s(()=>[t(c,{modelValue:r(e),"onUpdate:modelValue":l[3]||(l[3]=o=>u(e)?e.value=o:null),items:m,label:"I use selection slot",multiple:""},{selection:s(({item:o})=>[t(w,{class:"mt-1"},{default:s(()=>[t(U,{start:"",color:"primary"},{default:s(()=>[i(C(String(o.title).charAt(0).toUpperCase()),1)]),_:2},1024),i(" "+C(o.title),1)]),_:2},1024)]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},T={__name:"DemoComboboxVariant",setup(g){const e=d(["Programming"]),m=["Programming","Design","Vue","Vuetify"];return(p,l)=>(V(),b(_,null,{default:s(()=>[t(n,{cols:"12"},{default:s(()=>[t(c,{modelValue:r(e),"onUpdate:modelValue":l[0]||(l[0]=o=>u(e)?e.value=o:null),items:m,multiple:"",chips:"",variant:"solo",label:"solo"},null,8,["modelValue"])]),_:1}),t(n,{cols:"12"},{default:s(()=>[t(c,{modelValue:r(e),"onUpdate:modelValue":l[1]||(l[1]=o=>u(e)?e.value=o:null),multiple:"",chips:"",items:m,variant:"outlined",label:"Outlined"},null,8,["modelValue"])]),_:1}),t(n,{cols:"12"},{default:s(()=>[t(c,{modelValue:r(e),"onUpdate:modelValue":l[2]||(l[2]=o=>u(e)?e.value=o:null),multiple:"",chips:"",items:m,variant:"underlined",label:"Underlined"},null,8,["modelValue"])]),_:1}),t(n,{cols:"12"},{default:s(()=>[t(c,{modelValue:r(e),"onUpdate:modelValue":l[3]||(l[3]=o=>u(e)?e.value=o:null),multiple:"",chips:"",items:m,variant:"filled",label:"Filled"},null,8,["modelValue"])]),_:1}),t(n,{cols:"12"},{default:s(()=>[t(c,{modelValue:r(e),"onUpdate:modelValue":l[4]||(l[4]=o=>u(e)?e.value=o:null),multiple:"",chips:"",items:m,variant:"plain",label:"Plain"},null,8,["modelValue"])]),_:1})]),_:1}))}},$={__name:"DemoComboboxDensity",setup(g){const e=d(["Vuetify","Programming"]),m=["Programming","Design","Vue","Vuetify"];return(p,l)=>(V(),b(c,{modelValue:r(e),"onUpdate:modelValue":l[0]||(l[0]=o=>u(e)?e.value=o:null),items:m,label:"Combobox",density:"compact",multiple:""},null,8,["modelValue"]))}},S={__name:"DemoComboboxBasic",setup(g){const e=d("Programming"),m=["Programming","Design","Vue","Vuetify"];return(p,l)=>(V(),b(c,{modelValue:r(e),"onUpdate:modelValue":l[0]||(l[0]=o=>u(e)?e.value=o:null),items:m},null,8,["modelValue"]))}},j={ts:`<script lang="ts" setup>
const selectedItem = ref('Programming')
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VCombobox
    v-model="selectedItem"
    :items="items"
  />
</template>
`,js:`<script setup>
const selectedItem = ref('Programming')

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VCombobox
    v-model="selectedItem"
    :items="items"
  />
</template>
`},B={ts:`<script lang="ts" setup>
const select = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    clearable
  />
</template>
`,js:`<script setup>
const select = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    clearable
  />
</template>
`},M={ts:`<script lang="ts" setup>
const selectedItem = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        label="Select a favorite activity or create a new one"
        multiple
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        label="I use chips"
        multiple
        chips
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        label="I'm readonly"
        chips
        multiple
        readonly
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        label="I use selection slot"
        multiple
      >
        <template #selection="{ item }">
          <VChip class="mt-1">
            <VAvatar
              start
              color="primary"
            >
              {{ String(item.title).charAt(0).toUpperCase() }}
            </VAvatar>
            {{ item.title }}
          </VChip>
        </template>
      </VCombobox>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedItem = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        label="Select a favorite activity or create a new one"
        multiple
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        label="I use chips"
        multiple
        chips
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        label="I'm readonly"
        chips
        multiple
        readonly
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        label="I use selection slot"
        multiple
      >
        <template #selection="{ item }">
          <VChip class="mt-1">
            <VAvatar
              start
              color="primary"
            >
              {{ String(item.title).charAt(0).toUpperCase() }}
            </VAvatar>
            {{ item.title }}
          </VChip>
        </template>
      </VCombobox>
    </VCol>
  </VRow>
</template>
`},W={ts:`<script lang="ts" setup>
const select = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    density="compact"
    multiple
  />
</template>
`,js:`<script setup>
const select = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    density="compact"
    multiple
  />
</template>
`},F={ts:`<script lang="ts" setup>
const selectedItem = ref(['Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        multiple
        chips
        variant="solo"
        label="solo"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="outlined"
        label="Outlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="underlined"
        label="Underlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="filled"
        label="Filled"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="plain"
        label="Plain"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedItem = ref(['Programming'])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        multiple
        chips
        variant="solo"
        label="solo"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="outlined"
        label="Outlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="underlined"
        label="Underlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="filled"
        label="Filled"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="plain"
        label="Plain"
      />
    </VCol>
  </VRow>
</template>
`},G={ts:`<script lang="ts" setup>
const items = ['Gaming', 'Programming', 'Vue', 'Vuetify']
const selectedList = ref(['Vuetify'])
const search = ref(null)

watch(selectedList, value => {
  if (value.length > 5)
    nextTick(() => selectedList.value.pop())
})
<\/script>

<template>
  <VCombobox
    v-model="selectedList"
    v-model:search-input="search"
    :items="items"
    hide-selected
    :hide-no-data="false"
    hint="Maximum of 5 tags"
    label="Add some tags"
    multiple
    persistent-hint
  >
    <template #no-data>
      <VListItem>
        <VListItemTitle>
          No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
        </VListItemTitle>
      </VListItem>
    </template>
  </VCombobox>
</template>
`,js:`<script setup>
const items = [
  'Gaming',
  'Programming',
  'Vue',
  'Vuetify',
]

const selectedList = ref(['Vuetify'])
const search = ref(null)

watch(selectedList, value => {
  if (value.length > 5)
    nextTick(() => selectedList.value.pop())
})
<\/script>

<template>
  <VCombobox
    v-model="selectedList"
    v-model:search-input="search"
    :items="items"
    hide-selected
    :hide-no-data="false"
    hint="Maximum of 5 tags"
    label="Add some tags"
    multiple
    persistent-hint
  >
    <template #no-data>
      <VListItem>
        <VListItemTitle>
          No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
        </VListItemTitle>
      </VListItem>
    </template>
  </VCombobox>
</template>
`},O=a("p",null,"With Combobox, you can allow a user to create new values that may not be present in a provided items list.",-1),q=a("p",null,[i(" You can use "),a("code",null,"Density"),i(" prop to reduce combobox height and lower max height of list items. Available options are: "),a("code",null,"default"),i(", "),a("code",null,"comfortable"),i(", and "),a("code",null,"compact"),i(". ")],-1),E=a("p",null,[i("Use "),a("code",null,"solo"),i(", "),a("code",null,"outlined"),i(", "),a("code",null,"underlined"),i(", "),a("code",null,"filled"),i(" and "),a("code",null,"plain"),i(" options of "),a("code",null,"variant"),i(" prop to change the look of combobox. ")],-1),Y=a("p",null,"Previously known as tags - user is allowed to enter more than 1 value",-1),Z=a("p",null,"Previously known as tags - user is allowed to enter more than 1 value",-1),z=a("p",null,[i("Use "),a("code",null,"clearable"),i(" prop to clear combobox.")],-1),Pe={__name:"combobox",setup(g){return(e,m)=>{const p=S,l=L,o=$,f=T,v=N,h=R,x=k;return V(),b(_,{class:"match-height"},{default:s(()=>[t(n,{cols:"12",md:"6"},{default:s(()=>[t(l,{title:"Basic",code:j},{default:s(()=>[O,t(p)]),_:1},8,["code"])]),_:1}),t(n,{cols:"12",md:"6"},{default:s(()=>[t(l,{title:"Density",code:W},{default:s(()=>[q,t(o)]),_:1},8,["code"])]),_:1}),t(n,{cols:"12",md:"6"},{default:s(()=>[t(l,{title:"Variant",code:F},{default:s(()=>[E,t(f)]),_:1},8,["code"])]),_:1}),t(n,{cols:"12",md:"6"},{default:s(()=>[t(l,{title:"Multiple",code:M},{default:s(()=>[Y,t(v)]),_:1},8,["code"])]),_:1}),t(n,{cols:"12",md:"6"},{default:s(()=>[t(l,{title:"No data with chips",code:G},{default:s(()=>[Z,t(h)]),_:1},8,["code"])]),_:1}),t(n,{cols:"12",md:"6"},{default:s(()=>[t(l,{title:"Clearable",code:B},{default:s(()=>[z,t(x)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Pe as default};
