import React from "react";

// name 

export var name = "";


export const getName = () => {
  return localStorage.getItem("name") || "Zeyad Waleed";
};

export const setName = (newName) => {
  localStorage.setItem("name", newName);
  name = newName;
};

// bio

export var bio = "";

export const getBio = () => {
  return localStorage.getItem("bio") || "Talented goalkeeper currently playing for Al Ahly, one of Egypt's most prestigious football clubs. Born and raised in Cairo.";
};

export const setBio = (newBio) => {
  localStorage.setItem("bio", newBio);
  bio = newBio;
};

// email

export var email = "";

export const getEmail = () => {
  return localStorage.getItem("email") || "ZOZ@sportofolio.com";
};

export const setEmail = (newEmail) => {
  localStorage.setItem("email", newEmail);
  email = newEmail;
};

// pronouns

export var pronouns = "";

export const getPronouns = () => {
  return localStorage.getItem("pronouns") || "he/him";
}

export const setPronouns = (newPronouns) => {
  localStorage.setItem("pronouns", newPronouns);
  pronouns = newPronouns;
};

// url 

export var url = "";

export const getUrl = () => {
  return localStorage.getItem("url") || "http://sportofolio/profile/{id}";
}

export const setUrl = (newUrl) => {
  localStorage.setItem("url", newUrl);
  url = newUrl;
};

// valid emails that can login

export var emails = ["karim@coach.com", "karim@player.com", "zeyad@coach.com", "zeyad@player.com"];


export const addEmail = (newEmail) => {
    if (!emails.includes(newEmail)) {
        emails.push(newEmail);
    }
    
};


const DataComponent = () => {
    return (
        <div/>
    );
};

export default DataComponent;
