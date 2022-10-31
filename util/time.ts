export function wait(seconds) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => resolve(), seconds * 1000);
  });
}
