import React from "react";


function UserInfo({UserName, Organization, Designation, Institute, Course}){
    return(
        <div>
            <h1>
                {UserName}
            </h1>

            {
                Organization?
                (
                    <div>
                        <h4>
                            {Organization}
                        </h4>
                        <h4>
                            {Designation}
                        </h4>
                    </div>
                )
                :
                (
                    <div>
                        <h4>
                            {Institute}
                        </h4>
                        <h4>
                            {Course}
                        </h4>
                    </div>
                )
            }
            

        </div>
    )
}


export default UserInfo