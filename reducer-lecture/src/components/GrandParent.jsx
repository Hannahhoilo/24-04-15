import React from "react";
import Parent from "./Parent"


const GrandParent = () => {
	return (
		<div>
			<button onClick={()=> setUser("Updated")}>Update</button>
		</div>
	)
}

export default GrandParent;
