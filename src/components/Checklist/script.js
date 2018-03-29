import ChecklistItem from './ChecklistItem/ChecklistItem'

// ==================
// NAME
// ==================
const name = 'Checklist'

// ==================
// COMPONENTS
// ==================
const components = {
  ChecklistItem
}

// ==================
// PROPS
// ==================
const props = {}

// ================
// DATA
// ================
const data = function () {
  return {
    checklistItems: [],
    newItem: ''
  }
}

// ================
// COMPUTED
// ================
const computed = {}

// =================
// METHODS
// =================

/**
 * Creates a new item from the value of newItem
 * and pushes it into the checklistItems list
 */
const addItem = function () {
  let key = 0
  if (this.checklistItems.length !== 0) {
    key = this.checklistItems[this.checklistItems.length - 1].key + 1
  }
  this.checklistItems.push({ key, title: this.newItem })
  this.newItem = ''
}

/**
 * Removes the item with the given indexKey from the checklistItems list
 * @param indexKey Number the key of the item to remove
 */
const deleteItem = function (indexKey) {
  for (let i = 0; i < this.checklistItems.length; i++) {
    if (this.checklistItems[i].key === indexKey) {
      this.checklistItems.splice(i, 1)
      break
    }
  }
}

export default {
  name,
  components,
  props,
  data,
  computed,
  methods: {
    addItem,
    deleteItem
  }
}
