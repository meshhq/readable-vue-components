// ==================
// NAME
// ==================
const name = 'ChecklistItem'

// ================
// COMPONENTS
// ================
const components = {}

// ==================
// PROPS
// ==================
const props = {
  indexKey: { type: Number, required: true },
  itemTitle: { type: String, required: true }
}

// ================
// DATA
// ================
const data = function () {
  return {
    itemChecked: false,
    editingItem: false,
    itemTitleDone: this.itemTitle,
    itemTitleEdit: this.itemTitle
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
 * Sets the value of 'editingItem' to true if the item
 * hasn't already been checked off as completed
 */
const editItem = function () {
  if (!this.itemChecked) {
    this.editingItem = true
  }
}

/**
 * Reverts the item back to its previous description
 * and hides the editing input field
 */
const cancelEdit = function () {
  this.editingItem = false
  this.itemTitleEdit = this.itemTitleDone
}

/**
 * Sets the description of the item to the value of the
 * input field that is used to edit the description. If the user
 * has entered a blank value, the item is deleted
 */
const doneEdit = function () {
  this.itemTitleDone = this.itemTitleEdit
  this.editingItem = false
  if (this.itemTitleDone === '') {
    this.deleteItem()
  }
}

/**
 * Deletes the item from the parent Checklist component
 */
const deleteItem = function () {
  this.$parent.deleteItem(this.indexKey)
}

export default {
  name,
  components,
  props,
  data,
  computed,
  methods: {
    editItem,
    cancelEdit,
    doneEdit,
    deleteItem
  }
}
