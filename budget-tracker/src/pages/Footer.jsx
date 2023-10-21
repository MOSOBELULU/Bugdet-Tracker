import classes from './Footer.module.css'

export default function Footer() {
  return (
    <div className={classes.footer}>
      <a href="https://www.linkedin.com/in/lulu-mosobe-b96a99139/">
        <img src='\public\images\linkedin (1).png' alt="" className={classes.icon} />
      </a>
      <a href="https://github.com/MOSOBELULU">
        <img src='.\public\images\github (1).png'  alt=""className={classes.icon}/>
      </a>
      <a href="mosobelulu@gmail.com">mosobelulu@gmail.com</a>
    </div>
  )
}


// RecipeCard.js
// import { useState, useEffect } from "react";
// import React from "react";
// import Image from "next/image";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { responsive } from "../../helpers/settings/settings";
// import { formatTime } from "../../helpers/TimeConvertor";
// import calculateTotalTime from "../TimeAndDate/TotalTimeConverntion";
// import DescriptionEdit from "../Description/DescriptionEdit";

// const RecipeCard = ({ recipe, recipeId }) => {
//   const [isEditingDescription, setIsEditingDescription] = useState(false); 
//   const [editedDescription, setEditedDescription] = useState(recipe.description);

//   const databaseUrl = `https://descriptions-for-recipes-default-rtdb.firebaseio.com/description/${recipeId}.json`

//   const handleDescriptionSave = async (newDescription) => {
//     try {
//       //API request to update the description in the database
//       const response = await fetch(databaseUrl, {
//         method: "PUT", 
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ description: newDescription }),
//       });
      
//       if (response.ok) {
        
//         // Update the description in the UI
//         setEditedDescription(newDescription);
//         // Set isEditingDescription to false to exit the editing mode

//         setIsEditingDescription(false);
//       } else {
//         // Handle the case when the update request fails
//         console.error("Failed to update description.");
//       }
//     } catch (error) {
//       // Handle any errors that occur during the update process
//       console.error("Error updating description:", error);
//     }
    
//   };

//   useEffect(() => {
//     // Fetch the description data from Firebase when the component mounts
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://descriptions-for-recipes-default-rtdb.firebaseio.com/description.json');

//         if (response.ok) {
//           const data = await response.json();
//           // Set the fetched description data in the component state
//           setEditedDescription(data.description || ''); // Use an empty string as a default value if data is not found
//         } else {
//           console.error('Failed to fetch description data.');
//         }
//       } catch (error) {
//         console.error('Error fetching description data:', error);
//       }
//     };

//     fetchData(); // Call the fetchData function when the component mounts
//   }, []); 
 

//   if (!recipe) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="bg-amber-600 p-4 rounded shadow mb-4">
//       <h2 className="text-2xl font-semibold">{recipe.title}</h2>
//       <h3 className="mt-2 text-lg font-semibold">Images</h3>
//       <section className="list-disc list-inside">
//         <Carousel responsive={responsive}>
//           {recipe.images.map((image, index) => (
//             <div key={index} className="text-gray-600">
//               <div>
//                 <Image
//                   src={image}
//                   alt={recipe.title}
//                   width={300}
//                   height={300}
//                   className="max-w-full h-auto object-fit: cover"
//                 />
//               </div>
//             </div>
//           ))}
//         </Carousel>
//       </section>
//        (
//         <>
//       {isEditingDescription ? (
//         <DescriptionEdit
//           initialDescription={editedDescription}
//           onSave={handleDescriptionSave}
//         />
//       ) :    <p>{editedDescription}</p>
//           <button className="font-bold border-x-indigo-600 bg-red-500 hover:bg-gray-700 rounded-sm" onClick={() => setIsEditingDescription(true)}>Edit Description</button>
//         </>
//       )
// }
//       <p className="text-gray-600">
//         <b>Prep Time:</b> {formatTime(recipe.prep)} minutes
//       </p>
//       <p className="text-gray-600">
//         <b>Cook Time:</b> {formatTime(recipe.cook)} minutes
//       </p>
//       <p className="text-gray-600">
//         <b>Total Time:</b> {calculateTotalTime(recipe.prep, recipe.cook)}
//       </p>
//       <p className="text-gray-600">
//         <b>Category:</b> {recipe.category}
//       </p>
//       <p className="text-gray-600">
//         <b>Servings:</b> {recipe.servings}
//       </p>
//       <b>Published:</b>
//       <p className="text-gray-600">
//         {new Date(recipe.published).toLocaleDateString()}
//       </p>
//       <h3 className="mt-2 text-lg font-semibold">Tags:</h3>
//       <ul className="list-disc list-inside">
//         {recipe.tags.map((tag, index) => (
//           <li key={index} className="text-gray-600">
//             {tag}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RecipeCard;


// import { useState , useRef} from "react";

// const DescriptionEdit = ({ initialDescription, onSave }) => {
//   const [description, setDescription] = useState(initialDescription);

//   const handleDescriptionChange = (e) => {
//     setDescription(e.target.value);
//   };

//   const handleSave = (onSaveCallback) => {
//     // Custom save logic
//     // FireBase connection string "https://descriptions-for-recipes-default-rtdb.firebaseio.com/"
//     onSave(description);
//   };
//   const newTextRef = useRef()

//   return (
//     <div>
//       <textarea
//       ref={newTextRef}
//       className="w-auto h-auto"
//         value={description}
//         onChange={handleDescriptionChange}
//         rows={20}
//         cols={50}
//       />
//       <button className="bg-orange-300 rounded-sm 3" onClick={handleSave}>Save</button>
//     </div>
//   );
// };

// export default DescriptionEdit;


// import React, { useState, useEffect } from "react";
// import DescriptionEdit from "./DescriptionEdit";

// export default function Description({ description }) {
//   const [expanded, setExpanded] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [newDescription, setNewDescription] = useState("");

//   const toggleExpand = () => {
//     setExpanded(!expanded);
//   };

//   const toggleEditing = () => {
//     setIsEditing(!isEditing);
//   };
//   useEffect(()=>{},[]);

//   return (
//     <div>
//       {isEditing ? (
//         <DescriptionEdit
//           initialDescription={description}
//           onEditComplete={toggleEditing}
//         />
//       ) : expanded ? (
//         <div>
//           <p>{newDescription || description.slice(0, 100)}...</p>
//           <button onClick={toggleExpand}>Expand</button>
//         </div>
//       ) : (
//         <div>
//           <p>{ newDescription || description}</p>
//           <button onClick={toggleExpand}>Less</button>
//           <button onClick={toggleEditing}>Edit</button>
//         </div>
//       )}
//     </div>
//   );
// }
