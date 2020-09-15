// exporting and defining default function toArray with 1 parameter (value)
export default function toArray(value) {
  // calling isArray method of Array with 1 argument (value) -- ?
  return Array.isArray(value) ? value : [value];
}
