//타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "홍길동",
  nickname: "hong",
  birth: "1999.01.21",
  bio: "안녕하세요",
  location: "부산시",
};

let user2: User = {
  id: 1,
  name: "김아무개",
  nickname: "kim",
  birth: "1996.04.13",
  bio: "안녕하세요",
  location: "충주시",
};

//인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnutedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
};
