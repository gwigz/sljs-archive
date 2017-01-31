class PacketFormat {
  constructor(id, data) {
    this.id = id;
    this.name = data.name;
    this.number = data.number;
    this.frequency = data.frequency;
    this.trusted = data.trusted;
    this.compression = data.compression;
    this.deprecated = data.deprecated;
    this.blacklisted = data.blacklisted;
    this.requirements = data.format.length ? data.format : null;
  }
}

module.exports = PacketFormat;
