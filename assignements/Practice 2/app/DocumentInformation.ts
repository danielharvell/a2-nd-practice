export class DocumentInformation
{
	checkedOut: CheckOutInfo;
	customAttributes: CustomAttributes;
	location: Location;
	permissions: Permission[];
	standardAttributes: StandardAttributes;

	constructor() { }
}

export interface CheckOutInfo
{
	by: string;
	comment: string;
	displayName: string;
	when: Date;
}

export interface CustomAttributes
{
	id: string;
	value: string;
}

export interface Location
{
	account: string;
	cabinet: string;
}

export interface Misc
{
	approved: boolean;
	archived: boolean;
	deleted: boolean;
	echo: boolean;
	external: boolean;
	favorite: boolean;
	signed: boolean;
}

export interface Permission
{
	administer: boolean;
	cabDefault: boolean;
	edit: boolean;
	noAccess: boolean;
	share: boolean;
	view: boolean;
}

export interface StandardAttributes
{
	checkedOutState: boolean;
	created: Date;
	createdBy: string;
	createdByGuid: string;
	envId: string;
	extension: string;
	id: string;
	modified: Date;
	modifiedBy: string;
	modifiedByGuid: string;
	name: string;
	officialVer: number;
	size: number;
	syncMod: number;
	url: string;
	versions: number;
}