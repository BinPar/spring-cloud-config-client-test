import * as client from 'cloud-config-client';

test('Connect to Cloud Config Server', async (): Promise<void> => {
  const result = await client.load({
    endpoint: 'http://localhost:8888',
    name: 'eureka',
  });

  if (result instanceof Error) {
    const error = result as Error;
    throw error;
  } else {
    const config = result as client.Config;
    // config.properties tiene que tener más de las 3 propiedades por defecto
    expect(Object.keys(config.properties).length).toBeGreaterThan(3);
    // defaultZone tiene que ser 'http://localhost:8761/eureka/'
    const defaultZone = config.get('eureka.client.serviceUrl.defaultZone');
    expect(defaultZone).toBe('http://localhost:8761/eureka/');
  }
});
