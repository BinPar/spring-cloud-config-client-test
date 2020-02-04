import * as client from 'cloud-config-client';

test('Connect to Cloud Config Server', async (): Promise<void> => {
  const result = await client.load({
    endpoint: 'http://localhost:8888',
    name: 'application',
  });

  if (result instanceof Error) {
    const error = result as Error;
    throw error;
  } else {
    const config = result as client.Config;
    const value1 = config.get('eureka.password');
    console.log(value1);
    expect(1 + 2).toBe(3);
  }
});
