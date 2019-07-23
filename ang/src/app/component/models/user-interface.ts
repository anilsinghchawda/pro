export interface cateObj{
	name : string;
}
export interface userObj{
	name?  : string;
	dob? : number;
	email? : string;
	contact? : number;
	otpValue? :number;
	newPassword? : string;

}
export interface logObj{
	contact : number|any;
	password : string|any;
}
export interface updateObj{
	name?  : string;
	dob? : number;
	email? : string|any;
	contact? : number;
	otpValue? :number;
	newPassword? : string;
}
export interface checkLog{
	userLoggedIn?:boolean;
}