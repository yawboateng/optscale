""""azure_tenant"

Revision ID: acef45928ac5
Revises: 12a3869f6f2c
Create Date: 2023-05-24 07:44:04.036804

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'acef45928ac5'
down_revision = '12a3869f6f2c'
branch_labels = None
depends_on = None

old_cloud_types = sa.Enum('AWS_CNR', 'ALIBABA_CNR', 'AZURE_CNR',
                          'KUBERNETES_CNR', 'ENVIRONMENT', 'GCP_CNR')
new_cloud_types = sa.Enum('AWS_CNR', 'ALIBABA_CNR', 'AZURE_CNR', 'AZURE_TENANT',
                          'KUBERNETES_CNR', 'ENVIRONMENT', 'GCP_CNR')


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('cloudaccount',
                  sa.Column('parent_id', sa.String(36), nullable=True))
    op.create_foreign_key('parent_account_fk', 'cloudaccount', 'cloudaccount',
                          ['parent_id'], ['id'])
    op.alter_column('cloudaccount', 'type', existing_type=old_cloud_types,
                    type_=new_cloud_types, nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('parent_account_fk', 'cloudaccount', type_='foreignkey')
    op.drop_column('cloudaccount', 'parent_id')
    op.alter_column('cloudaccount', 'type', existing_type=new_cloud_types,
                    type_=old_cloud_types, nullable=False)
    # ### end Alembic commands ###
