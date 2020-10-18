export function getType (target: any):string {
  return Object.prototype.toString.call(target).slice(8, -1)
}

export function isDate (target: any): boolean {
  return getType(target) === 'Date'
}

export function isObject (target: any): boolean {
  return target !== null && typeof target === 'object'
}

export function isPlainObject (target: any):boolean {
  return getType(target) === 'Object'
}
