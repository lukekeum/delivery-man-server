import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import UserProfile from './UserProfile';

@Entity('users')
export default class User extends BaseEntity {
  constructor(user: Partial<User>) {
    super();
    Object.assign(this, user);
  }

  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true, length: 255 })
  email!: string;

  @Column({ unique: true, length: 20 })
  phone_number!: string;

  @Column({ unique: true, length: 255 })
  username!: string;

  @Column()
  password!: string;

  @OneToOne((type) => UserProfile, (profile) => profile.user)
  profile!: UserProfile;

  @CreateDateColumn()
  create_at!: Date;

  @UpdateDateColumn()
  update_at!: Date;

  @BeforeInsert()
  async hashPassword() {
    // TODO: hash password with bcrypt
  }
}
