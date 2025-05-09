TASK_PRISMA_DIR=src/backend/task

generate:
	cd $(TASK_PRISMA_DIR) && npx prisma generate

TASK_DIR=src/backend/task

nest-controller:
	cd $(TASK_DIR) && nest generate controller