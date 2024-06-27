export interface Articles {
	id: string;
	alt_description: string;
	description: string;
	likes: number;
	urls: {
		small: string;
		regular: string;
	};
	user: {
		username: string;
	};
}
