// export default FileInputBox(){
//     return (
//         <input
//               type="file"
//               accept="image/*"
//               className={`${styles.searchBox__fileInput}`}
//               id="searchBox__fileInput"
//               onChange={(event: any) => {
//                 const file = event.target.files[0];

//                 if (file) {
//                   const reader = new FileReader();
//                   reader.onload = (event: any) => {
//                     const base64String: any = event.target.result as string;
//                     setFile(base64String)
//                     //console.log(base64String);
//                     let temp: any = base64String.split(";")
//                     temp = temp[1].split(",")

//                     // You can do whatever you want with the base64String here
//                     localStorage.setItem("image-file", temp[1]);
//                     router.push(`/components/SearchResults?imageSearch=${temp[1].slice(-5)}&query=emptyEntry`);
//                   };
//                   reader.readAsDataURL(file);
//                 }
//               }}
//             />
//     )
// }