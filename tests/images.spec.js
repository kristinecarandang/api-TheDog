import { test,request, expect} from '@playwright/test';

test('Get a list of dog information with breed', async ({ request }) => {
  const response = await request.get('v1/images/search?limit=10&has_breeds=true&include_breeds=true');
  
  // Check if the response status is OK
  expect(response.ok()).toBeTruthy();
  
  // Parse the JSON response
  const data = await response.json();
  
  //Check if length of data is 10  
    expect(data.length).toBe(10);
  
  // Check if each breed id is not null
  data.forEach(dog => {
      expect(dog.id).not.toBeNull();
    });

});