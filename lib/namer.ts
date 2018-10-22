export function camelToKebab(camel: string) {
  let result = camel.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)
  if (result.indexOf('-') === 0) {
    result = result.substring(1)
  }
  return result
}

export function lowerFirstLetter(name: string) {
  return name.charAt(0).toLowerCase() + name.slice(1);
}

export function plural(singular: string) {
  const special = {
    quiz: 'quizzes',
  }
  return special[singular] || `${singular}s`
}