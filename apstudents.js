const apStudents = [
    //All AP Students
    {"name": "Jocelyn", "liveschoolName": "Jocelyn Lan Bai", "house": "Blue", "birthdate": "2011-01-19", "altName": "Jocelyn", "class": "AP Music Theory", "addable": "no"},
    {"name": "Maggie", "liveschoolName": "Maggie Gan", "house": "Red", "birthdate": "2011-02-12", "altName": "Maggie", "class": "AP Music Theory", "addable": "no"},
    {"name": "Alex", "liveschoolName": "Alex Tsz To Huang", "house": "Blue", "birthdate": "2011-10-19", "altName": "Alex", "class": "AP Music Theory", "addable": "no"},
    {"name": "Teresa", "liveschoolName": "Teresa Mingxun Jiang", "house": "Green", "birthdate": "2011-02-10", "altName": "Teresa", "class": "AP Music Theory", "addable": "no"},
    {"name": "Thomas", "liveschoolName": "Thomas Hongyi Long", "house": "Red", "birthdate": "2008-02-12", "altName": "Thomas", "class": "AP Music Theory", "addable": "no"},
    {"name": "Calvin", "liveschoolName": "Calvin Zihao Zhang", "house": "Blue", "birthdate": "2010-04-21", "altName": "Calvin", "class": "AP Music Theory", "addable": "no"},
    {"name": "William", "liveschoolName": "William Zhiwen Zheng", "house": "Yellow", "birthdate": "2010-11-21", "altName": "William", "class": "AP Music Theory", "addable": "no"},
]

const teacherName = "Mr. Tubbs";
const teacherPasswordSalt = "7593bbe90ce919ec412462bb7e81269d";
const teacherPasswordHash = "ea6556af8fab18ad7bd2ef5797bec3cb3616977d9d9ebb2eaff7abab92f4a164";

globalThis.studentPasswordCredentials = globalThis.studentPasswordCredentials || {};
globalThis.studentPasswordCredentials["calvin"] = {
    salt: "2357e6c50bc37983b209b733ab0abd12",
    hash: "a7473841ac0187bf57fe1dd0a1dfa97d5d9e0a8e9d3bf4f0be8ea2091051d894"
};
globalThis.studentPasswordCredentials = globalThis.studentPasswordCredentials || {};
globalThis.studentPasswordCredentials["maggie"] = {
    salt: "86837b9097d3059f3d60b1927bfa107c",
    hash: "8002d71d16c5b3f66a5808a748cfd4ba72bef98d2e5c684b4fb626111a7fbefa"
};
globalThis.studentPasswordCredentials = globalThis.studentPasswordCredentials || {};
globalThis.studentPasswordCredentials["alex"] = {
    salt: "687cbabe6d2dfe70613b4beac6d8aa4b",
    hash: "d7457813c94e1a5df8a2f1e220086b1b203c70f97f5c0800b7a26dc6fe82bce4"
};
globalThis.studentPasswordCredentials = globalThis.studentPasswordCredentials || {};
globalThis.studentPasswordCredentials["william"] = {
    salt: "70e6b55b84fd27e06a876ba3e1b88478",
    hash: "029af3e3bdab25d77114ec2506aeb530b6817da55e2ee53ea22aa17d9ffbaa27"
};
globalThis.studentPasswordCredentials = globalThis.studentPasswordCredentials || {};
globalThis.studentPasswordCredentials["thomas"] = {
    salt: "514a1136b2429c92cb605711b9486317",
    hash: "b3899b8113f567ca6987a83008b85ba0a46bb7eda6aa10877cf014f2ce499e1e"
};