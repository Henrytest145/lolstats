export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const makeRequest = async (url:string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
