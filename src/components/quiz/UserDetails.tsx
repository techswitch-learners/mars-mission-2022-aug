import React, { useState } from "react";

interface User {
  name: string | null;
  displayPic: string | null;
}

export const UserDetails: React.FunctionComponent = ({status,setStatus}: any) => {

  const [userDetails, setUserDetails] = useState<User>({
    name: null,
    displayPic:null,
  });
  

  function onSubmit(event: any) {    
    event.preventDefault();
    setStatus(true);   
  }

  return (
    <div>
   
      <form action="post">
        <div>
          <label> Name: </label>
          <input
            name="Name"
            type="text"
            onChange={(e) =>
              setUserDetails({ ...userDetails, name: e.target.value })
            }
          />
        </div>

        <div>
          <label> Display pic : </label>
          <input
            type="text"
            value="enter a url of an image"
            onChange={(e) =>
              setUserDetails({ ...userDetails, displayPic: e.target.value })
            }
          />
        </div>

        <button
          type="submit"
          value="Send"
          className="submit-button"
          onClick={(submit) => onSubmit(submit)}
        >
          Start Quiz...
        </button>

      </form>
      //set the state with the UserDetails
    </div>
  );
};
