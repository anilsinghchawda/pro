export interface cateStr{
	name : string;
	_id : number;
}
export interface userObj{
	contact : number;
	password : string;
}
export interface seasonObj{
	rainy?:boolean;
	winter?:boolean;
	summer?:boolean;
}
export interface typeObj{
	kharif?:boolean;
	rabi?:boolean;
	other?:boolean;
}
export interface rabiObj{
wheat:boolean;
gram:boolean;
onion:boolean;
potato:boolean;
fenugreek:boolean;
peas:boolean;
tomato:boolean;
coriender:boolean;
mustard:boolean;
maiz:boolean;
lucerne:boolean;
barley:boolean;
fennel:boolean;
}
export interface kharifObj{
soyabean:boolean;
groundnut:boolean;
paddy:boolean;
gour:boolean;
castor:boolean;
cotton:boolean;
chilli:boolean;
jawar:boolean;
sesame:boolean;
maize:boolean;
urad:boolean;
bajra:boolean;
arhar:boolean;
}
export interface proObj{
proname?:string;
ingrediant?:string;
file?:File;
price?:number;
category?:string;
company?:string;
season?:seasonObj;
type?:typeObj;
rabi?:rabiObj;
kharif?:kharifObj;
rating?:string;
}