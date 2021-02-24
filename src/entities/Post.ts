import {Entity as TOEntity, Column, Index, BeforeInsert, ManyToOne, JoinColumn} from "typeorm"

import Entity from "./Entity"
import User from "./User";

@TOEntity('posts')
export default class Post extends Entity {
    constructor(post: Partial<Post>) {
        super()
        Object.assign(this, post)
    }

    @Index()
    @Column()
    identifier: string // 7 character id

    @Column()
    title: string

    @Index()
    @Column()
    slug: string

    @Column({ nullable: true, type: 'text' })
    body: string

    @Column()
    subName: string

    @ManyToOne(() => User, user => user.posts)
    @JoinColumn({ name: 'username',referencedColumnName: 'username'})
    user: User

}
