const favouritelist = [];
export function AddService(i) {
  console.log("addservice called");
  favouritelist.push(i.title);
  console.log(favouritelist);
}
export function RemoveService(i) {
  console.log("removeservice called");
  const b = favouritelist.findIndex((item) => item === i.title);
  console.log(b);
  favouritelist.splice(b, 1);
  console.log(favouritelist);
}
