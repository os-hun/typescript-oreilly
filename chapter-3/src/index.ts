function squareOf(n: number) {
  return n * n
}

console.log('squareOF =>', squareOf(2))

// any
let any_a: any = 666
let any_b: any = ['danger']
let any_c = any_a + any_b
console.log('any =>', any_c)

// unknown
let unknown_a: unknown = 30
let unknown_b = unknown_a === 123
// let unknown_c = a + 10
// ↑はエラーになる
if (typeof unknown_a === 'number') {
  let unknown_d = unknown_a + 10
  console.log('unknown_d =>', unknown_d)
}
console.log('unknown_b =>', unknown_b)

