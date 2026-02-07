/// <reference types="vite/client" />

declare module '*.vue' {
  import type { defineComponent } from 'vue';

  const component: ReturnType<typeof defineComponent>;
  export default component;
}

declare module 'click-outside-vue3';
