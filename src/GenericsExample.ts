function transform<T>(data: T): string {
  return data + "";
}

console.log(`Boolean to String Transform ${transform<boolean>(true)}`);

console.log(`Number to String Transform ${transform<number>(45)}`);

console.log(
  `Object to String Transform ${transform<Object>({ name: "Sandeep" })}`
);
