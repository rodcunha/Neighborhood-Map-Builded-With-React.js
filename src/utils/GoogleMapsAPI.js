export const getAddressApi = () =>
	fetch("https://api.foursquare.com/v2/venues/search?ll=35.85472104,14.48779873&categoryId=4bf58dd8d48988d181941735,4bf58dd8d48988d15e941735,4d4b7105d754a06374d81259,4bf58dd8d48988d13a941735,4bf58dd8d48988d1ed931735&client_id=LZL0304WQ5WHZCSUFSAPCVXF45DJNGGJAVDQGEL2J1DT04J5&client_secret=CZSMM1XIYLGFHZSZ3PMDXMOFSTHXE44ZWN4WFVK0IM0D4BK3&v=20180513").then(res => res.json())