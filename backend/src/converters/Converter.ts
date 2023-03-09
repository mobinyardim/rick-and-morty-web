export interface Converter<Entity, Transfer, Domain> {
  toDomain(entity: Entity): Domain;

  toEntity(domain: Domain): Entity;

  bodyToEntity(transfer: Transfer): Entity;
}
