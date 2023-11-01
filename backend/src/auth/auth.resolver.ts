import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AuthResolver {

    @Query(() => String)
    async hello() {
        return 'Helloooo'
    }
}
