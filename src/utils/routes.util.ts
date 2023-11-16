export function flattenConfig(configArray: any[]): any[] {
  return configArray.flatMap((configItem) => [
    configItem,
    ...(configItem.children ? flattenConfig(configItem.children) : []),
  ]);
}
