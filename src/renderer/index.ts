// HACK: This is a weird workaround because `electron-webpack` recognises an
// `index.ts` entry point, but *not* `index.tsx`. So we simply have index.ts
// point to our *actual* entry point, which is `boot.tsx`.
import { webFrame } from 'electron'
import boot from './boot'

// Disable zoom
webFrame.setVisualZoomLevelLimits(1.0, 1.0)

// Start our React app!
boot()
