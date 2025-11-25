import { mutation, query } from './_generated/server'
import { v } from 'convex/values'

export const getAllTasks = query({
    handler: async (ctx) => {
        return await ctx.db.query('tasks').collect()
    }
})

export const getActiveTasks = query({
    handler: async (ctx) => {
        return (await ctx.db.query('tasks').collect()).filter((t) => t.isCompleted === false)
    }
})

export const getCompletedTasks = query({
    handler: async (ctx) => {
        return (await ctx.db.query('tasks').collect()).filter((t) => t.isCompleted === true)
    }
})

export const createTask = mutation({
    args: { taskName: v.string() },
    handler: async (ctx, args) => {
        await ctx.db.insert('tasks', {
            taskName: args.taskName,
            isCompleted: false
        })
    }
})

export const deleteTask = mutation({
    args: {taskId: v.id('tasks')},
    handler: async (ctx, args) => {
        await ctx.db.delete(args.taskId)
    }
})

export const toggleCompleteTask = mutation({
    args: { taskId: v.id('tasks') },
    handler: async (ctx, args) => {
        const task = await ctx.db.get(args.taskId)
        await ctx.db.patch(args.taskId, {
            isCompleted: !task.isCompleted
        })
    }
})

export const clearCompletedTasks = mutation({
    args: {},
    handler: async (ctx) => {
        const completed = (await ctx.db.query('tasks').collect()).filter((t) => t.isCompleted === true)
        for (const task of completed) {
            await ctx.db.delete(task._id)
        }
    }
})
