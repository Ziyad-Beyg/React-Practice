import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Nav from '../components/navbar';
import FreeAPI from '../screens/free-api';
import AnimalAPI from '../screens/animal-api-name';
import Snacks from '../screens/snacks';
import SignUp from "../screens/SignUp";
import SignIn from "../components/SignIn";
import AddStudentData from "../components/AddStudentData";
import AllStudents from "../components/AllStudents";
import AllStudentPage from "../screens/AllStudentPage";

export default function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route path="/animal-api">
                        <AnimalAPI />
                    </Route>
                    <Route path="/snacks">
                        <Snacks />
                    </Route>
                    <Route exact path="/">
                        <FreeAPI />
                    </Route>
                    <Route path="/signup">
                        <SignUp/>
                    </Route>
                    <Route path="/signin">
                        <SignIn/>
                    </Route>
                    <Route path="/add-student-data">
                        <AddStudentData/>
                    </Route>
                    <Route path="/my-details">
                        <AllStudents/>
                    </Route>
                    <Route path="/all-students-page">
                        <AllStudentPage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}