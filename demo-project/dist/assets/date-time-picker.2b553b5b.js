import{_ as s}from"./AppDateTimePicker.40a9ca5e.js";import{k as u,o as l,b as n,q as i,D as d,w as m,p as o}from"./index.7cf7c61e.js";import{_ as A}from"./AppCardCode.d75a1d26.js";import{a as c,V as b}from"./VRow.ff0250fc.js";import"./VField.f8e0ae60.js";import"./index.c48d7475.js";import"./VInput.1239432e.js";import"./router.3438bc48.js";import"./VImg.d72fefbf.js";import"./position.bc69640e.js";import"./easing.36b781ab.js";import"./vue.runtime.esm-bundler.021ffa3e.js";import"./VCard.2337b864.js";import"./VAvatar.4f19170c.js";import"./VBtn.173f27d7.js";import"./VDivider.be3199b8.js";const v={__name:"DemoDateTimePickerInline",setup(p){const e=u("");return(r,a)=>(l(),n(s,{modelValue:i(e),"onUpdate:modelValue":a[0]||(a[0]=t=>d(e)?e.value=t:null),label:"Inline",config:{inline:!0}},null,8,["modelValue"]))}},F={__name:"DemoDateTimePickerDisabledRange",setup(p){const e=new Date,r=e.toLocaleString("default",{month:"2-digit"}),a=e.getFullYear(),t=u("");return(_,D)=>(l(),n(s,{modelValue:i(t),"onUpdate:modelValue":D[0]||(D[0]=f=>d(t)?t.value=f:null),label:"Disabled Range",config:{dateFormat:"Y-m-d",disable:[{from:`${i(a)}-${i(r)}-20`,to:`${i(a)}-${i(r)}-25`}]}},null,8,["modelValue","config"]))}},V={__name:"DemoDateTimePickerHumanFriendly",setup(p){const e=u("");return(r,a)=>(l(),n(s,{modelValue:i(e),"onUpdate:modelValue":a[0]||(a[0]=t=>d(e)?e.value=t:null),label:"Human Friendly",config:{altInput:!0,altFormat:"F j, Y",dateFormat:"Y-m-d"}},null,8,["modelValue"]))}},Y={__name:"DemoDateTimePickerRange",setup(p){const e=u("");return(r,a)=>(l(),n(s,{modelValue:i(e),"onUpdate:modelValue":a[0]||(a[0]=t=>d(e)?e.value=t:null),label:"Range",config:{mode:"range"}},null,8,["modelValue"]))}},$={__name:"DemoDateTimePickerMultipleDates",setup(p){const e=u("");return(r,a)=>(l(),n(s,{modelValue:i(e),"onUpdate:modelValue":a[0]||(a[0]=t=>d(e)?e.value=t:null),label:"Multiple Dates",config:{mode:"multiple",dateFormat:"Y-m-d"}},null,8,["modelValue"]))}},R={__name:"DemoDateTimePickerDateAndTime",setup(p){const e=u("");return(r,a)=>(l(),n(s,{modelValue:i(e),"onUpdate:modelValue":a[0]||(a[0]=t=>d(e)?e.value=t:null),label:"Date & TIme",config:{enableTime:!0,dateFormat:"Y-m-d H:i"}},null,8,["modelValue"]))}},w={__name:"DemoDateTimePickerTimePicker",setup(p){const e=u("");return(r,a)=>(l(),n(s,{modelValue:i(e),"onUpdate:modelValue":a[0]||(a[0]=t=>d(e)?e.value=t:null),label:"Time picker",config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i"}},null,8,["modelValue"]))}},M={__name:"DemoDateTimePickerBasic",setup(p){const e=u("");return(r,a)=>(l(),n(s,{modelValue:i(e),"onUpdate:modelValue":a[0]||(a[0]=t=>d(e)?e.value=t:null),label:"Default"},null,8,["modelValue"]))}},H={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Default"
  />
</template>

`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Default"
  />
</template>

`},I={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const time = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="time"
    label="Time picker"
    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
  />
</template>
`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const time = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="time"
    label="Time picker"
    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
  />
</template>
`},j={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Date & TIme"
    :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
  />
</template>
`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Date & TIme"
    :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
  />
</template>
`},x={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const multipleDate = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="multipleDate"
    label="Multiple Dates"
    :config="{ mode: 'multiple', dateFormat: 'Y-m-d' }"
  />
</template>
`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const multipleDate = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="multipleDate"
    label="Multiple Dates"
    :config="{ mode: 'multiple', dateFormat: 'Y-m-d' }"
  />
</template>
`},U={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const dateRange = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="dateRange"
    label="Range"
    :config="{ mode: 'range' }"
  />
</template>
`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const dateRange = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="dateRange"
    label="Range"
    :config="{ mode: 'range' }"
  />
</template>
`},y={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Human Friendly"
    :config="{ altInput: true, altFormat: 'F j, Y', dateFormat: 'Y-m-d' }"
  />
</template>
`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Human Friendly"
    :config="{ altInput: true, altFormat: 'F j, Y', dateFormat: 'Y-m-d' }"
  />
</template>
`},C={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const now = new Date()
const currentMonth = now.toLocaleString('default', { month: '2-digit' })
const currentYear = now.getFullYear()
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Disabled Range"
    :config="{ dateFormat: 'Y-m-d', disable: [{ from: \`\${currentYear}-\${currentMonth}-20\`, to: \`\${currentYear}-\${currentMonth}-25\` }] }"
  />
</template>
`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const now = new Date()
const currentMonth = now.toLocaleString('default', { month: '2-digit' })
const currentYear = now.getFullYear()
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Disabled Range"
    :config="{ dateFormat: 'Y-m-d', disable: [{ from: \`\${currentYear}-\${currentMonth}-20\`, to: \`\${currentYear}-\${currentMonth}-25\` }] }"
  />
</template>
`},h={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Inline"
    :config="{ inline: true }"
  />
</template>
`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Inline"
    :config="{ inline: true }"
  />
</template>
`},te={__name:"date-time-picker",setup(p){return(e,r)=>{const a=M,t=A,_=w,D=R,f=$,T=Y,k=V,P=F,g=v;return l(),n(b,null,{default:m(()=>[o(c,{cols:"12",md:"6"},{default:m(()=>[o(t,{title:"Basic",code:H},{default:m(()=>[o(a)]),_:1},8,["code"])]),_:1}),o(c,{cols:"12",md:"6"},{default:m(()=>[o(t,{title:"Time Picker",code:I},{default:m(()=>[o(_)]),_:1},8,["code"])]),_:1}),o(c,{cols:"12",md:"6"},{default:m(()=>[o(t,{title:"Date and Time",code:j},{default:m(()=>[o(D)]),_:1},8,["code"])]),_:1}),o(c,{cols:"12",md:"6"},{default:m(()=>[o(t,{title:"Multiple Dates",code:x},{default:m(()=>[o(f)]),_:1},8,["code"])]),_:1}),o(c,{cols:"12",md:"6"},{default:m(()=>[o(t,{title:"Range",code:U},{default:m(()=>[o(T)]),_:1},8,["code"])]),_:1}),o(c,{cols:"12",md:"6"},{default:m(()=>[o(t,{title:"Human Friendly",code:y},{default:m(()=>[o(k)]),_:1},8,["code"])]),_:1}),o(c,{cols:"12",md:"6"},{default:m(()=>[o(t,{title:"Disabled Range",code:C},{default:m(()=>[o(P)]),_:1},8,["code"])]),_:1}),o(c,{cols:"12",md:"6"},{default:m(()=>[o(t,{title:"Inline",code:h},{default:m(()=>[o(g)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{te as default};
