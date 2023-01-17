export interface Converter<Entity, Domain> {

    toDomain(entity: Entity): Domain;

    toEntity(domain: Domain): Entity;

}