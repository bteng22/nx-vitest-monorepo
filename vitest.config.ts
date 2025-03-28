const path = require('node:path')
import {defineConfig} from 'vitest/config'

const uiPackagesDir = 'ui/packages'
const workingDir = process.cwd()
const isPackageLevel = workingDir.includes(uiPackagesDir)

const isUIPackage = workingDir.includes('ui/packages')
const rootPath = isUIPackage
  ? path.resolve(workingDir, '../../') // ui/packages -> ../../
  : path.resolve(workingDir, '../../../') // root/ui/packages -> ../../../

function fullPathFromRoot(relativePath) {
  return path.resolve(rootPath, getRepoAgnosticPath(relativePath))
}

function getRepoAgnosticPath(relativePath) {
  if (isUIPackage) {
    relativePath = relativePath.replace(/(^|\/)ui\/packages/, '$1packages')
  }
  return relativePath
}

export default defineConfig({
  test: {
    watch: false,
    root: isPackageLevel ? workingDir : fullPathFromRoot(''),
    /*
    Uncommenting the line below will allow tests to mock outside of the ui/packages directory but causes problems with fetching tests
     i.e. TypeError: Failed to fetch dynamically imported module
    */
    // root: fullPathFromRoot(''),
    workspace: [
      {
        extends: true,
        test: {
          name: 'browser',
          include: [`${workingDir}/**/__tests__/*.test.(tsx|ts|js)`],
          browser: {
            screenshotFailures: false,
            headless: true,
            enabled: true,
            provider: 'playwright',
            instances: [{browser: 'chromium'}],
          },
        },
      }
    ],
  },
})
