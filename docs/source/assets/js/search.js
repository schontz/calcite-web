console.log('cool search page')

calcite.bus.on('filterDropdown:active', logActive)
function logActive (options) {
  console.log(`Filter dropdown '${options.id}' has ${options.active.length} active items`)
  console.log(options.active)
}

