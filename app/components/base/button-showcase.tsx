import React from 'react'
import Button from './button'
import ActionButton, { ActionButtonState } from './action-button'
import EnhancedButton from './enhanced-button'

// 按钮组件使用示例
export default function ButtonShowcase() {
    return (
        <div className="p-8 space-y-8 bg-[var(--bg-primary)] min-h-screen">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-6">按钮组件展示</h1>

                {/* 基础 Button 组件 */}
                <section className="space-y-4">
                    <h2 className="text-lg font-semibold text-[var(--text-primary)]">基础 Button 组件</h2>
                    <div className="flex flex-wrap gap-4">
                        <Button type="primary" size="sm">Primary Small</Button>
                        <Button type="primary" size="md">Primary Medium</Button>
                        <Button type="primary" size="lg">Primary Large</Button>
                        <Button type="primary" variant="outline">Primary Outline</Button>
                        <Button type="primary" variant="ghost">Primary Ghost</Button>
                        <Button type="secondary">Secondary</Button>
                        <Button type="ghost">Ghost</Button>
                        <Button type="link">Link Button</Button>
                        <Button loading>Loading</Button>
                        <Button disabled>Disabled</Button>
                    </div>
                </section>

                {/* ActionButton 组件 */}
                <section className="space-y-4">
                    <h2 className="text-lg font-semibold text-[var(--text-primary)]">ActionButton 组件</h2>
                    <div className="flex flex-wrap gap-4">
                        <ActionButton size="xs">XS</ActionButton>
                        <ActionButton size="s">S</ActionButton>
                        <ActionButton size="m">M</ActionButton>
                        <ActionButton size="l">L</ActionButton>
                        <ActionButton size="xl">XL</ActionButton>
                        <ActionButton state={ActionButtonState.Active}>Active</ActionButton>
                        <ActionButton state={ActionButtonState.Destructive}>Destructive</ActionButton>
                        <ActionButton disabled>Disabled</ActionButton>
                    </div>
                </section>

                {/* Enhanced Button 组件 */}
                <section className="space-y-4">
                    <h2 className="text-lg font-semibold text-[var(--text-primary)]">Enhanced Button 组件</h2>
                    <div className="space-y-4">
                        {/* 变体展示 */}
                        <div className="flex flex-wrap gap-4">
                            <EnhancedButton variant="primary">Primary</EnhancedButton>
                            <EnhancedButton variant="secondary">Secondary</EnhancedButton>
                            <EnhancedButton variant="ghost">Ghost</EnhancedButton>
                            <EnhancedButton variant="link">Link</EnhancedButton>
                            <EnhancedButton variant="danger">Danger</EnhancedButton>
                        </div>

                        {/* 尺寸展示 */}
                        <div className="flex flex-wrap gap-4 items-center">
                            <EnhancedButton variant="primary" size="xs">XS</EnhancedButton>
                            <EnhancedButton variant="primary" size="sm">SM</EnhancedButton>
                            <EnhancedButton variant="primary" size="md">MD</EnhancedButton>
                            <EnhancedButton variant="primary" size="lg">LG</EnhancedButton>
                            <EnhancedButton variant="primary" size="xl">XL</EnhancedButton>
                        </div>

                        {/* 圆角展示 */}
                        <div className="flex flex-wrap gap-4">
                            <EnhancedButton variant="primary" rounded="none">None</EnhancedButton>
                            <EnhancedButton variant="primary" rounded="sm">Small</EnhancedButton>
                            <EnhancedButton variant="primary" rounded="md">Medium</EnhancedButton>
                            <EnhancedButton variant="primary" rounded="lg">Large</EnhancedButton>
                            <EnhancedButton variant="primary" rounded="full">Full</EnhancedButton>
                        </div>

                        {/* 图标展示 */}
                        <div className="flex flex-wrap gap-4">
                            <EnhancedButton
                                variant="primary"
                                icon={<span>🚀</span>}
                                iconPosition="left"
                            >
                                Left Icon
                            </EnhancedButton>
                            <EnhancedButton
                                variant="primary"
                                icon={<span>⭐</span>}
                                iconPosition="right"
                            >
                                Right Icon
                            </EnhancedButton>
                        </div>

                        {/* 状态展示 */}
                        <div className="flex flex-wrap gap-4">
                            <EnhancedButton variant="primary">Normal</EnhancedButton>
                            <EnhancedButton variant="primary" loading>Loading</EnhancedButton>
                            <EnhancedButton variant="primary" disabled>Disabled</EnhancedButton>
                            <EnhancedButton variant="primary" fullWidth>Full Width</EnhancedButton>
                        </div>
                    </div>
                </section>

                {/* 交互说明 */}
                <section className="space-y-4">
                    <h2 className="text-lg font-semibold text-[var(--text-primary)]">交互特性</h2>
                    <div className="bg-[var(--bg-secondary)] p-4 rounded-lg border border-[var(--border-subtle)]">
                        <ul className="space-y-2 text-[var(--text-secondary)] text-sm">
                            <li>• 所有按钮都支持键盘导航 (Enter/Space)</li>
                            <li>• 悬停时有缩放和阴影效果</li>
                            <li>• 点击时有按下效果</li>
                            <li>• 焦点时有环形指示器</li>
                            <li>• 支持加载状态和禁用状态</li>
                            <li>• 使用 CSS 变量，适配主题</li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
}
