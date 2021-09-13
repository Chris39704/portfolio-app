const aliases = (prefix = `src`) => ({
  "@pages": `${prefix}/pages`,
  "@components": `${prefix}/components`,
  "@fb": `${prefix}/fb`,
  "@hooks": `${prefix}/hooks`,
  "@utils": `${prefix}/utils`,
  "@shared": `${prefix}/shared`,
  "@state": `${prefix}/state`,
  "@types": `${prefix}/types`,
});

module.exports = aliases;
