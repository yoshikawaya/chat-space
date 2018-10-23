# README

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|index: ture, null:faise,unique: true|
|mail|string|null: false|

### Association
- has_many :group, through: members
- has_many :messages
- has_many :members


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|body|string|null: false|
|image|string|

### Association
- belongs_to :group
- belongs_to :user


## groupsテーブル
 |Column|Type|Options|
|------|----|-------|
|groupname|string|null: false|

### Association
- has_many :users, through: members
- has_many :members
- has_many :messages
