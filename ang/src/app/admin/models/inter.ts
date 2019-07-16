export interface cateStr{
	name : string;
	_id : number;
}
export interface userObj{
	contact : number;
	password : string;
}
export interface seasonObj{
	rainy?:string;
	winter?:string;
	summer?:string;
}
export interface typeObj{
	kharif?:string;
	rabi?:string;
	other?:string;
}
export interface rabiObj{
wheat:string;
gram:string;
onion:string;
potato:string;
fenugreek:string;
peas:string;
tomato:string;
coriender:string;
mustard:string;
maiz:string;
lucerne:string;
barley:string;
fennel:string;
}
export interface kharifObj{
soyabean:string;
groundnut:string;
paddy:string;
gour:string;
castor:string;
cotton:string;
chilli:string;
jawar:string;
sesame:string;
maize:string;
urad:string;
bajra:string;
arhar:string;
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